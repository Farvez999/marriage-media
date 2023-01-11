const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;

// middle wares
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.mordayw.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

function verifyJWT(req, res, next) {

    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).send('unauthorized access');
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.ACCESS_TOKEN, function (err, decoded) {
        if (err) {
            return res.status(403).send({ message: 'forbidden access' })
        }
        req.decoded = decoded;
        next();
    })

}

async function run() {
    try {
        const usersCollection = client.db("marriage-media").collection("users");
        const packagesCollection = client.db("marriage-media").collection("package");
        const priviledgesCollection = client.db("marriage-media").collection("priviledges");
        const aboutUsCollection = client.db("marriage-media").collection("about");

        const categoriesCollection = client.db("used-products-resale-portal").collection("categories");
        const productsCollection = client.db("used-products-resale-portal").collection("products");
        const bookingsCollection = client.db("used-products-resale-portal").collection("bookings");
        const wishlistsCollection = client.db("used-products-resale-portal").collection("wishlists");
        const paymentsCollection = client.db("used-products-resale-portal").collection("payments");

        const verifyAdmin = async (req, res, next) => {
            const decodedEmail = req.decoded.email;
            const query = { email: decodedEmail };
            const user = await usersCollection.findOne(query);

            if (user?.role !== 'admin') {
                return res.status(403).send({ message: 'forbidden access' })
            }
            next();
        }

        const verifySeller = async (req, res, next) => {
            const decodedEmail = req.decoded.email;
            const query = { email: decodedEmail };
            const user = await usersCollection.findOne(query);

            if (user?.role !== 'Seller') {
                return res.status(403).send({ message: 'forbidden access' })
            }
            next();
        }

        // JWT
        app.get('/jwt', async (req, res) => {
            const email = req.query.email;
            const query = { email: email };
            const user = await usersCollection.findOne(query);
            if (user) {
                const token = jwt.sign({ email }, process.env.ACCESS_TOKEN, { expiresIn: '24h' })
                return res.send({ accessToken: token });
            }
            res.status(403).send({ accessToken: '' })
        });

        // ---------------------------------------------------------------
        //User post
        app.post('/users', async (req, res) => {
            const user = req.body;
            const result = await usersCollection.insertOne(user);
            res.send(result);
        })


        // User get Admin permistion
        app.get('/users/admin/:email', async (req, res) => {
            const email = req.params.email;
            const query = { email }
            const user = await usersCollection.findOne(query);
            res.send({ isAdmin: user?.role === 'admin' });
        })


        //Addmin add Package
        app.post('/addPackage', verifyJWT, async (req, res) => {
            const package = req.body;
            const result = await packagesCollection.insertOne(package);
            const id =
                res.send(result);
        })

        //All category
        app.get('/packages', async (req, res) => {
            const query = {};
            const cursors = packagesCollection.find(query)
            const package = await cursors.toArray()
            res.send(package)
        })

        // app.post('/addPriviledges', verifyJWT, async (req, res) => {
        //     const package = req.body;
        //     const result = await priviledgesCollection.insertOne(package);
        //     res.send(result);
        // })
        //Addmin add Priviledges
        app.patch('/addPriviledges', verifyJWT, async (req, res) => {
            console.log(req.body.package);
            const query = {
                package: req.body.package
            }
            const abc = await priviledgesCollection.findOne(query);
            const title = abc ? abc.title : '';
            const def = [...title, ...req.body.title];
            console.log(def);

            const filter = query;
            const options = { upsert: true };
            const updateDoc = {
                $set: {
                    title: def,
                    email: req.body.email,
                    author: req.body.author
                },
            };
            const result = await priviledgesCollection.updateOne(filter, updateDoc, options);
            console.log(result);
            // // const result = await priviledgesCollection.insertOne(priviledges);
            res.send(result);
        })

        // All Priviledges
        app.get('/priviledges', async (req, res) => {
            const query = {};
            const cursors = priviledgesCollection.find(query)
            const priviledge = await cursors.toArray()
            res.send(priviledge)
        })

        // Add a About Us
        app.post('/addAboutus', verifyJWT, async (req, res) => {
            const about = req.body;
            const result = await aboutUsCollection.insertOne(about);
            res.send(result);
        })

        app.get('/aboutus', async (req, res) => {
            const query = {};
            const cursors = aboutUsCollection.find(query)
            const aboutus = await cursors.toArray()
            res.send(aboutus)
        })


        // Search 
        app.get('/searchProfile', async (req, res) => {
            const search = req.query.search
            console.log(search)
            let query = {
                $text: { $search: search }
            };
            // if (search.length) {
            //     query = {
            //         $search: search, $caseSensitive: false
            //     }
            // }
            const cursor = usersCollection.find(query);
            const services = await cursor.toArray();
            res.send(services);
        });
        // app.get('/services', async (req, res) => {
        //     const search = req.query.search
        //     console.log(search);
        //     const query = {
        //         $text:{$search:search}
        //     };
        //     const cursors = usersCollection.find(query)
        //     const aboutus = await cursors.toArray()
        //     res.send(aboutus)
        // })
        // ---------------------------------------------------------------

        //All category
        app.get('/categories', async (req, res) => {
            const query = {};
            const cursors = categoriesCollection.find(query)
            const categorie = await cursors.toArray()
            res.send(categorie)
        })

        app.get('/categorie/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) }
            const categorie = await categoriesCollection.findOne(query)
            res.send(categorie)
        })

        app.get('/categories/:name', async (req, res) => {
            const name = req.params.name;
            const query = {
                category: name
            }

            const products = await productsCollection.find(query).toArray()

            // -----------booking paid == Category product dekhabe na--------------- 
            const remainingProduct = products.filter(product => product.paid !== true)
            // -----------booking paid == Category product dekhabe na--------------- 

            res.send(remainingProduct)
        })



        //All product get
        app.get('/products', async (req, res) => {
            const query = {};
            const result = await productsCollection.find(query).toArray()
            res.send(result);
        });

        //Seller product get
        app.get('/products/:email', async (req, res) => {
            const email = req.params.email;
            const query = { email: email }
            const result = await productsCollection.find(query).toArray()
            res.send(result);
        });


        //Seller add product
        app.post('/addProduct', verifyJWT, verifySeller, async (req, res) => {
            const product = req.body;
            const result = await productsCollection.insertOne(product);
            const id =
                res.send(result);
        })

        //Get Advertise
        app.get('/advertise', async (req, res) => {
            const query = { advertise: true };
            const result = await productsCollection.find(query).toArray()
            res.send(result);
        });

        //advertise data update
        app.put('/addProduct/addAdvertisement/:id', async (req, res) => {

            const id = req.params.id;
            const ProductQuery = {
                _id: ObjectId(id)
            }
            const updatedDoc = {
                $set: {
                    advertise: true,
                }
            }
            const result = await productsCollection.updateOne(ProductQuery, updatedDoc);
            res.send(result);

        })

        //advertise data remove
        app.put('/addProduct/removeAdvertisement/:id', async (req, res) => {

            const id = req.params.id;
            const ProductQuery = {
                _id: ObjectId(id)
            }
            const updatedDoc = {
                $set: {
                    advertise: false,
                }
            }
            const result = await productsCollection.updateOne(ProductQuery, updatedDoc);
            res.send(result);

        })

        // Seller delete
        app.delete('/products/:id', verifyJWT, verifySeller, async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await productsCollection.deleteOne(query);
            res.send(result);
        })



        //All User 
        app.get('/users', async (req, res) => {
            const query = {}
            const users = await usersCollection.find(query).toArray()
            res.send(users)
        })

        //All User
        app.get('/users/:email', async (req, res) => {
            const email = req.params.email;
            const query = { email }
            const users = await usersCollection.findOne(query)
            res.send(users)
        })



        app.get('/allUser/:role', async (req, res) => {
            const role = req.params.role;
            const query = { role: role };
            const users = await usersCollection.find(query).toArray()
            res.send(users);
        })



        //User get Seller permistion
        app.get('/users/seller/:email', async (req, res) => {
            const email = req.params.email;
            const query = { email }
            const user = await usersCollection.findOne(query);
            res.send({ isSeller: user?.role === 'Seller' });
        })

        // Update user role Admin
        app.put('/users/admin/:id', verifyJWT, async (req, res) => {
            const id = req.params.id;
            const filter = { _id: ObjectId(id) }
            const options = { upsert: true };
            const updatedDoc = {
                $set: {
                    role: 'admin'
                }
            }
            const result = await usersCollection.updateOne(filter, updatedDoc, options);
            res.send(result);
        })


        // Update seller role verify
        app.put('/users/seller/:id', verifyJWT, async (req, res) => {
            const id = req.params.id;
            const filter = { _id: ObjectId(id) }
            const options = { upsert: true };
            const updatedDoc = {
                $set: {
                    varify: 'verified'
                }
            }
            const result = await usersCollection.updateOne(filter, updatedDoc, options);
            res.send(result);
        })


        // Buyer delete
        app.delete('/buyers/:id', verifyJWT, verifyAdmin, async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await usersCollection.deleteOne(query);
            res.send(result);
        })

        // Seller delete
        app.delete('/sellers/:id', verifyJWT, verifyAdmin, async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await usersCollection.deleteOne(query);
            res.send(result);
        })



        //get bookings my product
        app.get('/bookings', verifyJWT, async (req, res) => {
            const email = req.query.email;

            const decodedEmail = req.decoded.email;

            if (email !== decodedEmail) {
                return res.status(403).send({ message: 'forbidden access' })
            }
            // console.log('token', req.headers.authorization)

            const query = { email: email };
            const bookings = await bookingsCollection.find(query).toArray();
            res.send(bookings);
        })

        // bookings post (submit data)
        app.post('/bookings', async (req, res) => {
            const booking = req.body;
            console.log(booking)

            // const query = {
            //     appointmentDate: booking.appointmentDate,
            //     email: booking.email,
            //     treatment: booking.treatment

            // }

            // const alreadyBooked = await bookingsCollection.find(query).toArray();

            // if (alreadyBooked.length) {
            //     const message = `You have already Booking on ${booking.appointmentDate}`
            //     return res.send({ acknowledged: false, message });
            // }

            const result = await bookingsCollection.insertOne(booking)
            res.send(result);
        })

        // Wishlist post add wishlist
        app.post('/wishlist', async (req, res) => {
            const wishlist = req.body;
            console.log(wishlist)
            const result = await wishlistsCollection.insertOne(wishlist)
            res.send(result);
        })

        //get wishlist my wishlist
        app.get('/wishlists', verifyJWT, async (req, res) => {
            const email = req.query.email;

            const decodedEmail = req.decoded.email;

            if (email !== decodedEmail) {
                return res.status(403).send({ message: 'forbidden access' })
            }
            // console.log('token', req.headers.authorization)

            const query = { email: email };
            const wishlists = await wishlistsCollection.find(query).toArray();
            res.send(wishlists);
        })


        // Payment booking api
        app.get('/bookings/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) }
            const booking = await bookingsCollection.findOne(query)
            res.send(booking);
        })


        // Payment Api
        app.post("/create-payment-intent", async (req, res) => {
            const booking = req.body;
            console.log(booking)
            const resalePrice = booking.resalePrice
            const amount = resalePrice * 100

            // Create a PaymentIntent with the order amount and currency
            const paymentIntent = await stripe.paymentIntents.create({
                currency: 'usd',
                amount: amount,
                "payment_method_types": [
                    "card"
                ]
            });
            res.send({
                clientSecret: paymentIntent.client_secret,
            });
        })

        app.post('/payments', async (req, res) => {
            const payment = req.body;
            const result = await paymentsCollection.insertOne(payment);
            const id = payment.bookingId
            const filter = { _id: ObjectId(id) }
            const updatedDoc = {
                $set: {
                    paid: true,
                    transactionId: payment.transactionId
                }
            }
            const updatedResult = await bookingsCollection.updateOne(filter, updatedDoc)

            //------------Order update hole paid true --------
            const orderData = await bookingsCollection.findOne(filter)
            const productQuery = {
                _id: ObjectId(orderData.productId)
            };
            const productUpdateDoc = {
                $set: {
                    paid: true
                }
            }
            const productUpdateResult = await productsCollection.updateOne(productQuery, productUpdateDoc);
            const updatedProduct = await productsCollection.findOne(productQuery)
            //------------Order update hole paid true --------

            res.send(result);
        })




    } finally {
        //   await client.close();
    }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send('Marriage Media is Running')
})

app.listen(port, () => {
    console.log(`Marriage Media running on Server ${port}`);
})