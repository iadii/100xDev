const totalNotifications = (req, res) => {
    const networking = 7
    const jobs = 8
    const messaging = 7
    const notifications = 5

    res
        .status(200)
        .json({
            networking,
            jobs,
            messaging,
            notifications
        })
}

export { totalNotifications }