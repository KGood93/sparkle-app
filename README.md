# Sparkle

Sparkle is a motivational journaling app to help inspire you to shine.

## Motivation

Everyone needs a little motivation sometimes. Sparkle is a journaling app which encourages you to reflect on a motivational quote to bring out the best of you.

## Demo
- [Live Demo](https://sparkle-app.now.sh/)

## Installing
Install the dependencies and devDependencies and start the server.
```
npm install  
npm start
```

## Testing
To run front-end tests run ```npm test``` in terminal.

## Schema

### Sparkle Quotes
```
(
    quoteId INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    quote TEXT NOT NULL,
    author TEXT,
    used INTEGER
);
```

### Sparkle Journal
```
(
    journalId INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    userId uuid REFERENCES sparkle_users(userId),
    journalTitle TEXT, 
    entryCount INTEGER
);
```

### Sparkle Entry
```
(
    entryId INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    title TEXT NOT NULL, 
    date DATE DEFAULT now() NOT NULL,
    content TEXT NOT NULL,
    journalId INTEGER REFERENCES sparkle_journal(journalId) ON DELETE CASCADE NOT NULL,
    quoteId INTEGER REFERENCES sparkle_quotes(quoteId)
);
```

## API Overview
```
/api
.
|__ /quotes
|   |__ GET
|   |    |__ /
|__ /journal
|    |__ GET
|    |    |__ /:journalId
|__ /entry
|    |__ POST
|    |    |__ /
|    |__ GET
|    |    |__ /
|    |    |__ /:entryId
|    |__PATCH
|    |  |__ /:entryId
|    |__ DELETE
|        |__ /:entryId       
```

### GET ```/api/quotes/```
```
// res.body
[
  {
    quoteid: Number,
    quote: String,
    author: String,
    used: Number
  }  
]
```

### GET ```/api/journal/:journalId```
```
// res.body
[
  {
    journalid: Number,
    userid: String,
    journalTitle: String
  }
]
```
### GET ```/api/entry/```
```
// res.body
[
  {
    entryid: Number,
    title: String,
    date: Date,
    content: String,
    journalid: Number,
    quoteid: Number
  }  
]
```

### GET ```/api/entry/:entryId```
```
// req.params
  entryid: Number

// res.body
[
  {
    entryid: Number,
    title: String,
    date: Date,
    content: String,
    journalid: Number,
    quoteid: Number
  }  
]
```

### POST ```/api/entry/```
```
// req.body
{
    title: String,
    content: String,
    journalid: Number,
    quoteid: Number
}
```

### DELETE ```/api/entry/:entryid```
```
// req.params
  entryid: Number
```

### PATCH ```/api/entry/:entryid```
```
// req.body
{
    content: String,
}
```

## Screenshots
Journal Page:
![Image of Sparkle Journal Page](https://github.com/KGood93/sparkle-app/blob/master/src/Screenshots/Journal.jpg)

Add Entry Page:
![Image of Sparkle Add Entry Page](https://github.com/KGood93/sparkle-app/blob/master/src/Screenshots/AddEntry.jpg)

Short Quote Entry Page:
![Image of Sparkle Short Quote Entry Page](https://github.com/KGood93/sparkle-app/blob/master/src/Screenshots/ShortEntry.jpg)

Long Quote Entry Page:
![Image of Sparkle Long Quote Entry Page](https://github.com/KGood93/sparkle-app/blob/master/src/Screenshots/LongEntry.jpg)

## Built With

### Front-End
- React
- HTML 5
- CSS 3

### Back-End
- PostgreSQL
- Node
- Express
- Knex

### Testing
- Mocha
- Chai 
- Jest
- Enzyme

## Features
- Create a new journal entry
- View previous journal entries
- Delete existing journal entries
