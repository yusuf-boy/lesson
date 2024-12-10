// loop / Assay / string / function / object 

/* --- 1 MASHQ --- */ 
//  ushbu arraydagi stringni inxednini toping.
const myArray = [[false, true], [1, 2], 99, 'good']

  for (let i = 0; i < myArray.length; i++) {
    // console.log(typeof myArray[1] == 'string')
    if (typeof myArray[i] == 'string') {
        console.log('String index:', i)
    }
  }

  myArray.forEach((item, i)=> {
    if (typeof item == 'string') {
        console.log('String index:', i)
    }
  })

  /*--- 2 MASHQ ---*/
  // Array ichidagi faqat arraylarni elemetlarini ajratib oling.
  // Kutilyotgan natija: [1,2,3,4,5,6]
  const data = [[1,2,3], 'qizil', [4,5,6], true, false]
  const newData = []

  data.forEach((item) => {
    const res = Array.isArray(item)
    if (res) {
        item.forEach((num) => {
            newData.push(num)
        })
        // console.log(item) //shunda bunda [1,2,3] bu [4,5,6] chigadi
    }
  })
  console.log(newData)
