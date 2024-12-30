import { assert } from "chai"
import { getUser } from "../class/user.js"
import { userTestData } from "../data/user.js"

it('Realizar consulta de usuários', async () => {
    const response = await getUser()
})

it('Realizar consulta de usuários - por ID - QueryParams', async () => {
    const response = await getUser(userTestData.getUserIdNameEmailAdministrator)
})

it('Realizar consulta de usuários - por ID', async () => {
    const response = await getUser(undefined,userTestData.getUserById)
    console.log(response.body)
})