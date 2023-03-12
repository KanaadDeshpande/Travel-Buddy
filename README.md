# Travel Buddy
## To run

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
SLOW_CACHE=60
FAST_CACHE=60
RAZOR_PAY_KEY_ID= your razorpay key id
RAZOR_PAY_KEY_SECRET= your razor pay secret key
JWT_SECRET = 'abc123'
```

### Install Dependencies 

#### Frontend & Backend

```
npm install
cd frontend
npm install
```

#### Django Server
```
virtualenv env
env\Scripts\activate (windows)
pip install -r requirements.txt
```

### Run

```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server

# Run machine learning model on Django (:8000)
cd machine
./manage.py runserver
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```
