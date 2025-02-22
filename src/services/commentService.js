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

export async function deleteComment(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    }})
  return res.json()
} 
