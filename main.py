from fastapi import FastAPI
import builtwith
from fastapi.middleware.cors import CORSMiddleware

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
    return builtwith.builtwith(newUrl)