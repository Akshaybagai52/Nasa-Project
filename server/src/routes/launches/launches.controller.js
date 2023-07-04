const { getAllLaunches, addNewLaunch } = require('../../models/launches.model')
function httpGetAllLaunches(req, res) {
    return res.status(200).json(Array.from(getAllLaunches()))
}
function httpAddNewLaunches(req, res) {
    const launch = req.body
    if (!launch.mission || !launch.rocket || !launch.launchDate || !launch.target) {
        return res.status(400).json({
            error: 'Missing required fields',
        })
    }
    launch.launchDate = new Date(launch.launchDate)
    if(isNaN(launch.launchDate)) {
        return res.status(400).json({
            error:'Incorrect date format'
        })
    }

    addNewLaunch(launch)
    return res.status(201).json(launch)
}
module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunches
}