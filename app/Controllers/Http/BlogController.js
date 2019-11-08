'use strict';

const Blog = use('App/Models/Blog');
const AuthorizationService = use('App/Services/AuthorizationService');

class BlogController {
	async index({ auth }) {
		const user = await auth.getUser();
		return await user.blogs().fetch();
	}

	async all() {
		return await Blog.all();
	}

	async create({ request, auth }) {

		const user = await auth.getUser();
		const { title, content, author } = request.all();
		const blog = new Blog();
		blog.title = title;
		blog.content = content;
		blog.author = author;
		await user.blogs().save(blog);
		return blog;
	}

	async update({ params, request, auth }) {
		const user = await auth.getUser();
		const { id } = params;
		const blog = await Blog.find(id);
		AuthorizationService.verifyPermission(blog, user);
		blog.merge(request.only(['title', 'content', 'author']));
		await blog.save();
		return blog;
	}

	async destroy({ params, response, auth }) {
		const user = await auth.getUser();
		const { id } = params;
		const blog = await Blog.find(id);
		AuthorizationService.verifyPermission(blog, user);
		await blog.delete();
		return blog;
	}
}

module.exports = BlogController;
