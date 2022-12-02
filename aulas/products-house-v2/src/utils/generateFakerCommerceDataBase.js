const fs = require('fs');
const path = require('path');
const { v4: generateID } = require('uuid');
const { faker } = require('@faker-js/faker');
const bcrypt = require('bcryptjs');
const fetch = require('node-fetch');

class Product {
    id;
    name;
    description;
    price;
    image;
    active;
    stock;

    constructor(name, description, price, image, active, stock) {
        this.id = generateID();
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image
        this.active = active;
        this.stock = stock;
    }
}

class User {
    id;
    name;
    email;
    password;
    cep;
    state;
    city;
    street;
    hoseNumber;
    neighboord;
    tel;
    isAdmin = false;

    constructor(name, email, password) {
        const hash = bcrypt.hashSync(password, 10);

        this.id = generateID();
        this.name = name;
        this.email = email;
        this.password = hash;
        
    }

    getCep() {
        return this.cep;
    }

    setCep(cep) {
        this.cep = cep;
    }

    getState() {
        return this.state;
    }

    setState(state) {
        this.state = state;
    }

    getCity() {
        return this.city;
    }

    setCity(city) {
        this.city = city;
    }

    getStreet() {
        return this.street;
    }

    setStreet(street) {
        this.street = street;
    }
    
    getHouseNumber() {
        return this.hoseNumber
    }

    setHouseNumber(houseNumber) {
        this.hoseNumber = houseNumber;
    }

    getNeighborhood() {
        return this.neighboord;
    }

    setNeighborhood(neighborhood) {
        this.neighboord = neighborhood;
    }

    getTel() {
        return this.tel;
    }

    setTel(tel) {
        this.tel = tel;
    }

}

const db = {
    users: [],
    products: []
}

const generateDatabaseJSON = (array) => {
    const arrayJson = JSON.stringify(array, null, 4);
    fs.writeFileSync(path.resolve("src", "database", "db.json"), arrayJson, 'utf8');
    return;
}

const createDatabase = async () => {
    console.log('Trying to create database, wait...\n' +  '='.repeat(120));

    try {
        for(let i = 0; i <= 15; i++) {
            const response = await fetch(`https://fakestoreapi.com/products/${i + 1}`);
            const data = await response.json();
            
            const product = new Product(
                data.title,
                data.description,
                data.price.toLocaleString('pt-BR', {minimumFractionDigits: 2, style: 'currency', currency: 'BRL'}),
                data.image,
                true,
                true
            );
            
            const user = new User(
                faker.name.fullName(),
                faker.internet.email().toLowerCase(),
                '123456'
            );
        
            db.products.push(product);
            db.users.push(user);
        }
    
        generateDatabaseJSON(db);

        console.log(`Created the db.json file with success!\nFile Path: src > database > db.json`);
        return;
    } catch (err) {
        console.log(`Ins't possible to create the db.json file.\nError: ${err}`); 
    }
 
}

createDatabase();