import { Colors } from "../types"


export const getColors = (color: string): Colors => {

    switch (color) {
        case 'fighting':
            
            return Colors.Brown

        case 'flying':
            
            return Colors.Sky
        
        case 'poison':
            
            return Colors.Purple
    
        case 'ground':
            
            return Colors.DarkMustard

        case 'rock':
            
            return Colors.Mustard
        
        case 'bug':
            
            return Colors.Green

        case 'ghost':
            
            return Colors.DarkBlue

        case 'steel':
            
            return Colors.GrayBlue
        
        case 'fire':
            
            return Colors.Orange
        
        case 'water':
            
            return Colors.SkyBlue

        case 'grass':
            
            return Colors.Plant
        
        case 'electric':
            
            return Colors.Yellow
    
        case 'psychic':
            
            return Colors.Pink

        case 'ice':
            
            return Colors.Cyan
        
        case 'dragon':
            
            return Colors.RealBlue

        case 'dark':
            
            return Colors.Dark

        case 'fairy':
            
            return Colors.LightPink
        
        case 'stellar':
            
            return Colors.Stellar
    
        default:
            return Colors.Gray;
    }

}