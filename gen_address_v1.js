function (context, args) {
  let hash = s => {
    return #s.jojotastic.sha256({s:JSON.stringify(s)})
  }
  let genAddress = () => {
    return hash(Date.now()+Math.random()).match(/.{1,8}/g).map((a,i)=>{return i%2==0 ? a : ""}).filter(a=>a!="").join(":");
  }
  return genAddress()
}