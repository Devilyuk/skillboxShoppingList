import { Card } from "./Card"
import './CardList.css'

export const CardList = ({
    shoppingList, handleFocusout, handleCheckedChange
}) => {

    return (
        <div className="shopping-list__list">
            {   
                shoppingList.length ?
                (shoppingList.map((item) => 
                    <div key={item.id}>
                        <Card 
                            item={item} 
                            handleFocusout={handleFocusout}
                            handleCheckedChange={handleCheckedChange}
                        />
                    </div>
                )) :
                (
                    <div>Список пуст. Добавьте новые элементы.</div>
                )
            }
        </div>
    )
}