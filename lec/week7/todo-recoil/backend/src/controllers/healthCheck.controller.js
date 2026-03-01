const healthCheck = async (req, res) => {
    res
        .status(200)
        .json({
            msg: "Server is UP",
            timestamp: new Date().toLocaleString()
        })
}

export { healthCheck }