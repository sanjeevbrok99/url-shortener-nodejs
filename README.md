# url-shortener-nodejs
## Stacks

- JavaScript
https://url-shortener-api.onrender.com
- Node js
- Express js
- MongoDB

## Server Installation
``` 
cd src
npm install 
```
### This will run server
npm run dev
### API Endpoints
**1. Create a Shortned Link (Post):**<br>
*Request*

```
https://url-shortener-api.onrender.com/api/v1/createShortUrl


##Ex.
https://url-shortener-api.onrender.com/api/v1/createShortUrl
```
body: {"origUrl": "https://www.amazon.in/dp/B088FLHXJY/ref=sspa_dk_detail_2?psc=1&pd_rd_i=B088FLHXJY&pd_rd_w=rwydj&content-id=amzn1.sym.b3dfef88-30a1-490c-be36-e990ef384667&pf_rd_p=b3dfef88-30a1-490c-be36-e990ef384667&pf_rd_r=TS7S5QC051GB8DD6K24J&pd_rd_wg=9qIGY&pd_rd_r=525a9dc4-2bbc-4caa-b909-13f2a0e685fd&s=electronics&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw",}
*Response*

```json
{
    "_id": "63df3a37d9737b067d032433",
    "urlId": "l2bz27uQfrydC5BiUxyIJ",
    "origUrl": "https://www.amazon.in/dp/B088FLHXJY/ref=sspa_dk_detail_2?psc=1&pd_rd_i=B088FLHXJY&pd_rd_w=rwydj&content-id=amzn1.sym.b3dfef88-30a1-490c-be36-e990ef384667&pf_rd_p=b3dfef88-30a1-490c-be36-e990ef384667&pf_rd_r=TS7S5QC051GB8DD6K24J&pd_rd_wg=9qIGY&pd_rd_r=525a9dc4-2bbc-4caa-b909-13f2a0e685fd&s=electronics&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw",
    "shortUrl": "https://url-shortener-api.onrender.com/l2bz27uQfrydC5BiUxyIJ",
    "clicks": 3,
    "createdAt": "2023-02-05T05:10:15.202Z",
    "updatedAt": "2023-02-05T05:13:28.194Z",
}
```

**2. Get Main URL from Shortened URL (Get):**<br>
*Request*

```
https://url-shortener-api.onrender.com/api/v1/redirect/{unique-id}

##Ex.
https://url-shortener-api.onrender.com/api/v1/redirect/l2bz27uQfrydC5BiUxyIJ
```

*Response*

```json
{
  "status": true,
  "main_link": "https://url-shortener-api.onrender.com/api/v1/redirect/l2bz27uQfrydC5BiUxyIJ",
  
}