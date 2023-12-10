const nanoid = require("nanoid")
const URL = require("../models/url")

const handleGenerateNewShortUrl = async (req,res)=>{
    const body = req.body
    if(!body.url) return res.status(400).json({error: 'url is required'})
    const shortId = nanoid.customAlphabet('123456789abcdefghijklmnopqrstuvwxyz',8)()
    await URL.create({
        shortId : shortId,
        redirectUrl: body.url,
        visitHistory: [],
    })

    return res.json({id: shortId})
}

const handleGetAnalytics = async (req,res)=>{
    const shortId = req.params.shortId
    const analytics = await URL.findOne({
        shortId
    })

    const analyticsDates = analytics.visitHistory.map((dateItem)=>{
        return new Date(dateItem.timestamp)
    })
    
    console.log(analyticsDate)
    return res.json({
        totalClick: analytics.visitHistory.length,
        analytics: analyticsDates,
    })
}

module.exports = {handleGenerateNewShortUrl,handleGetAnalytics}