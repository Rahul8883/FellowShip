

		var slot=11;
		
    var list=new ArrayList[slot];
        for (var i = 0; i < list.length; i++) {
			list[i]=new ArrayList<>();
		}
		var file = new File("E:\\output.txt"); 
		var readsync=require('readline-sync')
		
		Scanner sc = new Scanner(file); 
		String string=""; 
		while (sc.hasNextLine())
		{
			string+=sc.nextLine();
		}
        var str=[];
         str= string.split(",");
		for (var i = 0; i < str.length; i++){
			var num=str[i];
			var number=Integer.parseInt(num);
			var mod=(number%slot);
			
				switch(mod) {
				case 0:{
					list[mod].add(number);
					break;
				}
				case 1:{
					list[mod].add(number);
					break;
				}
				case 2:{
					list[mod].add(number);
					break;
				}
				case 3:{
					list[mod].add(number);
					break;
				}case 4:{
					list[mod].add(number);
					break;
				}case 5:{
					list[mod].add(number);
					break;
				}case 6:{
					list[mod].add(number);
					break;
				}case 7:{
					list[mod].add(number);
					break;
				}case 8:{
					list[mod].add(number);
					break;
				}case 9:{
					list[mod].add(number);
					break;
				}case 10:{
					list[mod].add(number);
					break;
				}default:{
					break;
				}
				}

			}
			for (var j = 0; j < list.length; j++)
			{
				
				for (var j2 = 0; j2 < list[j].size(); j2++) 
				{
					console.log(list[j].get(j2)+",");
				}
				console.log();
                
			}
		}


	
}
