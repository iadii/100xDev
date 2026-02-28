const healthCheck = async (req, res) => {
    res
        .status(200)
        .json({
            msg: "Server is runnign",
            timestamp: Date.now()
        })
}

export { healthCheck }