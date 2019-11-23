resource "aws_s3_bucket" "redirect" {
  bucket = "hoangkn.com"
  website {
    redirect_all_requests_to = "https://www.hoangkn.com"
  }
}

locals {
  redirect_s3_origin_id = "S3-Website-hoangkn.com.s3-website-eu-west-1.amazonaws.com"
}

resource "aws_cloudfront_distribution" "redirect" {
  origin {
    domain_name = aws_s3_bucket.redirect.website_endpoint
    origin_id = local.redirect_s3_origin_id
    custom_origin_config {
      http_port = 80
      https_port = 443
      origin_protocol_policy = "http-only"
      origin_ssl_protocols = ["TLSv1.2"]
    }
  }
  aliases = ["hoangkn.com"]
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
    target_origin_id = local.redirect_s3_origin_id
    viewer_protocol_policy = "allow-all"
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

resource "aws_route53_record" "hoangkn_ip4" {
  zone_id = aws_route53_zone.hoangkn.id
  name    = ""
  type    = "A"
  alias {
    name                   = aws_cloudfront_distribution.redirect.domain_name
    zone_id                = aws_cloudfront_distribution.redirect.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "hoangkn_ip6" {
  zone_id = aws_route53_zone.hoangkn.id
  name    = ""
  type    = "AAAA"
  alias {
    name                   = aws_cloudfront_distribution.redirect.domain_name
    zone_id                = aws_cloudfront_distribution.redirect.hosted_zone_id
    evaluate_target_health = false
  }
}