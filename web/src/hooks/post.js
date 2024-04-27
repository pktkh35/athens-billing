const post = async (url = "", rawData = {}, cb) => {
    try {
        const response = await fetch("https://"+GetParentResourceName()+"/" + url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(rawData)
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        cb && cb(data);
        return data;
    } catch (error) {
        console.error("Error: " + error);
        return null;
    }
}

export default post;
