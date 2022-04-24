function getCategoryText(category) {
    let text = "";
    switch (category) {
        case "fysiek":
          text = "Bewandel het yoga pad";
         break;
        case "subtiel":
          text = "Ontdek jezelf";
          break;
        case "causaal":
          text = "Vergroot je bewustzijn";
          break;
        case "bewustzijn":
          text = "Wees één met het leven";
          break;
        case "inspiratie":
          text = "Inspiratie";
    }
    return text;
}

export default getCategoryText;