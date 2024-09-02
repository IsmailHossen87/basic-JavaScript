const college = {
    name: "SPI",
    unique: {
        color: "blue",
        events:["bijoy","sadinota "],
        result:{
            gpa:5,
            merit:"top"
        }
    }
}
college.unique.result.merit= "most of the top"
// console.log(college.unique.result.merit)
college.unique.events[1]= "jani na"
console.log(college.unique.events[1])