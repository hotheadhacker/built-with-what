from fastapi import FastAPI
import builtwith
from fastapi.middleware.cors import CORSMiddleware
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from pydantic import BaseModel
import json

app = FastAPI()

# CORS origin fix
''' For specific domains '''
# origins = [
#     "http://localhost.tiangolo.com",
#     "https://localhost.tiangolo.com",
#     "http://localhost",
#     "http://localhost:8080",
#     "http://localhost:3000v"
# ]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# How to page
@app.get("/")
async def root():
    return {"message": "Hello World"}

# Main Handler For API
@app.get("/get/{url}")
async def root(url: str):
    newUrl = 'http://' + url
    print(newUrl)
    
    data = builtwith.builtwith(newUrl)
    
    return JSONResponse(content=builtwith.builtwith(newUrl))
    # return {"message": "Hello World"}
