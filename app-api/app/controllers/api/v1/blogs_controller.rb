module Api
  module V1
    class BlogsController < ApplicationController
      def index
        blogs = Blog.all
        # render json: { status: 'SUCCESS', message: 'loaded blogs', data: blogs}, status: :ok
        render json: blogs
      end

      def create
        blog = Blog.new(blog_params)
        if blog.save
          render json: "create new blog.\n", status: 200
        else
          render json: "fail to blog.\n", status: 500
        end          
      end

      private
        def blog_params
          params.require(:blog).permit(:slug, :title, :body)
        end
    end
  end
end
