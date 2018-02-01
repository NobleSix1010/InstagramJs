const url = 'https://www.instagram.com/instagram/?__a=1';
const instaPromise = fetch(url);
var bio = '', user = '';

var x = 0, y = 0;
	instaPromise
		.then(data => data.json())
		.then(data => { 
			const post = data.user.media.nodes;
			const postUserBio = data.user;
			bio = postUserBio.biography;
			user = postUserBio.username;
			var clone = [...data.user.media.nodes];
			console.log(`Usuario:${user} \nBiografia:${bio}`);

			clone.sort(function(a, b){
				if(a.likes.count == b.likes.count)
					return 0;
				if(a.likes.count < b.likes.count)
					return 1;
				else
					return -1;
			});

			while(y < clone.length){
				console.log(`Likes: ${clone[y].likes.count}`);
				console.log(`Comment: ${clone[y].caption}`);
				y++;
			}
			
		})

   