provider "aws" {
  region = "eu-west-1"
}

provider "aws" {
  alias  = "us"
  region = "us-east-1"
}

resource "aws_s3_bucket" "website" {
  bucket = "www.hoangkn.com"
}

resource "aws_route53_zone" "hoangkn" {
  name = "hoangkn.com"
}

resource "aws_acm_certificate" "hoangkn" {
  provider = aws.us
  domain_name       = "*.hoangkn.com"
  subject_alternative_names = ["hoangkn.com"]
  validation_method = "DNS"
  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_route53_record" "cert_validation" {
  name    = aws_acm_certificate.hoangkn.domain_validation_options.0.resource_record_name
  type    = aws_acm_certificate.hoangkn.domain_validation_options.0.resource_record_type
  zone_id = aws_route53_zone.hoangkn.id
  records = [aws_acm_certificate.hoangkn.domain_validation_options.0.resource_record_value]
  ttl     = 60
}

resource "aws_acm_certificate_validation" "hoangkn" {
  provider = aws.us
  certificate_arn         = aws_acm_certificate.hoangkn.arn
  validation_record_fqdns = [aws_route53_record.cert_validation.fqdn]
}


locals {
  website_s3_origin_id = "S3-www.hoangkn.com"
}

resource "aws_cloudfront_origin_access_identity" "website" {
  comment = "access-identity-www.hoangkn.com.s3.eu-west-1.amazonaws.com"
}

resource "aws_cloudfront_distribution" "website" {
  origin {
    domain_name = aws_s3_bucket.website.bucket_regional_domain_name
    origin_id = local.website_s3_origin_id
    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.website.cloudfront_access_identity_path
    }
  }
  aliases = ["www.hoangkn.com"]
  default_root_object = "index.html"
  enabled = true
  is_ipv6_enabled = true
  default_cache_behavior {
    allowed_methods = ["GET", "HEAD"]
    cached_methods = ["GET", "HEAD"]
    compress = true
    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }
    target_origin_id = local.website_s3_origin_id
    viewer_protocol_policy = "redirect-to-https"
  }
  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
  viewer_certificate {
    acm_certificate_arn = aws_acm_certificate.hoangkn.arn
    ssl_support_method = "sni-only"
    minimum_protocol_version = "TLSv1.1_2016"
  }
}

data "aws_iam_policy_document" "s3_policy" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.website.arn}/*"]

    principals {
      type        = "AWS"
      identifiers = [aws_cloudfront_origin_access_identity.website.iam_arn]
    }
  }

  statement {
    actions   = ["s3:ListBucket"]
    resources = [aws_s3_bucket.website.arn]

    principals {
      type        = "AWS"
      identifiers = [aws_cloudfront_origin_access_identity.website.iam_arn]
    }
  }
}

resource "aws_s3_bucket_policy" "s3_cloudfront_access" {
  bucket = aws_s3_bucket.website.id
  policy = data.aws_iam_policy_document.s3_policy.json
}

resource "aws_route53_record" "www_hoangkn_ip4" {
  zone_id = aws_route53_zone.hoangkn.id
  name    = "www"
  type    = "A"
  alias {
    name                   = aws_cloudfront_distribution.website.domain_name
    zone_id                = aws_cloudfront_distribution.website.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "www_hoangkn_ip6" {
  zone_id = aws_route53_zone.hoangkn.id
  name    = "www"
  type    = "AAAA"
  alias {
    name                   = aws_cloudfront_distribution.website.domain_name
    zone_id                = aws_cloudfront_distribution.website.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "trustpilot" {
  zone_id = aws_route53_zone.hoangkn.id
  name    = "trustpilot"
  type    = "CNAME"
  records = ["trustpilot-hoangkn.netlify.com"]
  ttl = 300
}