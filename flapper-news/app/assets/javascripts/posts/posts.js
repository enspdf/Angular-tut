angular.module('flapperNews')
.factory('posts', [function () {
    var o = {
        posts: []
    };
    return o;
}])
.factory('posts', [
	'$http',
	function ($http) {
		o.getAll = function () {
			return $http.get('/posts.json').success(function (data) {
				angular.copy(data, o.posts);
			});
		};
		o.create = function (posts) {
			return $http.post('/posts.json', post).success(function (data) {
				o.posts.push(data);
			});
		};
		o.upvote = function (post) {
			return $http.put('/posts/' + post.id + '/upvote.json')
			.success(function (data) {
				post.upvote += 1;
			});
		};
		o.get = function (id) {
			return $http.get('/posts/' + id + '.json').then(function (res) {
				return res.data;
			});
		};
		o.addComment = function (id, comment) {
			return $http.post('/posts/' + id + '/comments.json', comment);
		};
		o.upvoteComment = function (post, comment) {
			return $http.put('/posts/' + post.id + '/comments/' + comment.id + '/upvote.json')
			.success(function (data) {
				comment.upvotes += 1;
			});
		};	
	}
])