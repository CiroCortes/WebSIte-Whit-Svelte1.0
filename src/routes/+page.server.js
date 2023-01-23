export const load = async({ fetch }) =>{
    const getPost = async () => {
		const res = await fetch('/api/post.json');
		const data = await res.json();
	return data;	
		
	};

    return{
        posts: getPost(),
    }

}