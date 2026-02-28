const totalNotifications = (req, res) => {
    const network = 107
    const jobs = 8
    const messaging = 7
    const notifications = 5

    res
        .status(200)
        .json({
            network,
            jobs,
            messaging,
            notifications
        })
}

export { totalNotifications }