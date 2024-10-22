import requests

# Define the URL and parameters
url = "http://localhost:4000/adii"
params = {"num": 4}

# Define the method and send the request
response = requests.get(url, params=params)

# Print the status code
print(f"This result is {response.status_code}")

# Print the JSON body
try:
    json_body = response.json()
    print(json_body)
except ValueError:
    print("Response content is not valid JSON")
