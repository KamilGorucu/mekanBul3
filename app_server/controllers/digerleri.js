module.exports.hakkinda=function(req,res){
    res.render('hakkinda',{'title':'Hakkinda'});
}
const hakkinda=function(req,res,next){
    req.render('hakkinda',{"title":"Hakkinda"});
}