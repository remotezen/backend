ember generate resource books title:string price:number author:belongs-to publisher:belongs-to
 ember g resource authors name:string books:has-many
 ember g resource publishing-houses name:string discount:number books:has-many
