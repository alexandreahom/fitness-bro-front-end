import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/comments`

export async function create(form, profileId) {
  const res = await fetch(`${BASE_URL}/${profileId}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'}, 
      body: JSON.stringify(form)
    })
  return res.json()
}

export async function deletedComment(id,profileId) {
  const res = await fetch(`${BASE_URL}/deleted/${profileId}/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    }})
  return res.json()
} 

export async function show(commentId) {
  const res = await fetch(`${BASE_URL}/${commentId}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'}, 
    })
  return res.json()
}