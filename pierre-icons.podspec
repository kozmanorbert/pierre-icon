require "json"

version = JSON.parse(File.read('package.json'))["version"]

Pod::Spec.new do |s|
  s.name         = "pierre-icons"
  s.version        = version
  s.summary        = "Package that contains all Pierre icons"
  s.homepage       = "https://github.com/DanijelBojcic/pierre-icons"
  s.license        = "MIT"
  s.author         = { "Danijel Bojcic" => "danijel@studiopresent.com" }
  s.platforms      = { :ios => "9.0", :tvos => "9.0" }
  s.source         = { :git => "https://github.com/DanijelBojcic/pierre-icons.git", :tag => "v#{s.version}" }
  s.source_files = "ios/**/*.{h,m,mm}"
  s.resources      = "Fonts/*.ttf"
  s.preserve_paths = "**/*.js"
  s.dependency 'React'
end
