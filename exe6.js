function searchJavascriptExperience (experiences) {
    if (experiences.indexOf('javascript') == -1)
        return false
    else
        return true

}

var experiences = ['c', 'c++', 'javascript', 'html', 'css']
console.log(searchJavascriptExperience (experiences))
