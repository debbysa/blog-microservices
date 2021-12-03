import React from 'react'
// import React, { useState, useEffect } from 'react'
// import axios from 'axios'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ comments }) => {
	// now we using query service, so we don't need state again
	// const [comments, setComments] = useState([])

	// const fetchData = async () => {
	// 	const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`)

	// 	setComments(res.data)
	// }

	// // supaya hanya dieksekusi 1x
	// useEffect(() => {
	// 	fetchData()
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [])

	const renderedComments = comments.map((comment) => {
		return <li key={comment.id}>{comment.content}</li>
	})

	return <ul>{renderedComments}</ul>
}
