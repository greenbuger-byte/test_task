export const roomTranslate = (rooms= 1) =>{

    try{

        let numberOfRoom = rooms;
        let text = 'комнат';
        switch (numberOfRoom){
            case 1:
                text = 'комнатa';
                break;
            case 2 :
                text = 'комнаты';
                break;
            case 3 :
                text = 'комнаты';
                break;
            case 4 :
                text = 'комнаты';
                break;
        }
        console.log(rooms, text)
        return text;
    }catch (err){
        console.log(err.message || err);
        return 'комнат';
    }

}