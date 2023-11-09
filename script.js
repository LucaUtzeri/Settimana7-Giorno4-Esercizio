
const URL = new URLSearchParams(window.location.search).get("pexelsId")


window.onload = () => {
    fetch("https://api.pexels.com/v1/search?query=nature").then(response => {

        console.log(response)
        if (!response.ok) {

            if (response.status === 400) { throw new Error("Bad Request") }
            if (response.status === 401) { throw new Error("Unauthorized") }
            if (response.status === 403) { throw new Error("Forbidden") }
            if (response.status === 404) { throw new Error("Not found") }

            throw new Error("Generic Fetching error")
        }

        return response.json()
    }).then((imgObj) => { });
};