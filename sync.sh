rm *~*
aws s3 sync . s3://fiddle.dragonruby.org --delete
