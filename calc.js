const closestPair = points => {
   let arr = []
    for(let i = 0; i < points.length; i++){
        let testNode = points[i]
        for(let j = 0; j < points.length; j++){
            let subNode = points[j]
            let x = testNode[0] - subNode[0]
            let y = testNode[1] - subNode[1]
            let d = Math.sqrt((x**2) + (y**2))
            arr.push(d)
        }
    }
  const minIndex = arr.indexOf(Math.min.apply(null, arr.filter(Boolean)))
  const node1 = points[Math.floor(minIndex/points.length)]
  const node2 = points[minIndex % points.length]


  let count = 0
  arr.forEach(element => {
    if(element == 0) count++
  })

  if(count <= points.length) return [node1, node2]



  let dups = []
    for(let i = 0; i < arr.length; i++){
      if(arr[i] == 0){
        if(i % (points.length + 1) !== 0){
          dups.push(points[Math.floor(i/points.length)])
        }
        
      }
    }
    
 return dups
}



console.log(closestPair([
  [2,2], // A
  [2,8], // B
  [5,5], // C
  [6,3], // D
  [6,7], // E
  [7,4], // F
  [7,9]  // G
]
))


// [
//   [2,2], // A
//   [2,8], // B
//   [5,5], // C
//   [5,5], // C
//   [6,3], // D
//   [6,7], // E
//   [7,4], // F
//   [7,9]  // G
// ] 


