module ApplicationHelper

   before_action :redirect_to_www if Rails.env == "production"

   def redirect_to_www
     unless /www\.work-me-out\.com/ =~ request.url
       uri = URI.parse(request.url)
       uri.host = "www.work-me-out.com"
       redirect_to uri.to_s
     end
   end

end

