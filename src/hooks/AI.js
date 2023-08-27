export default function AI (matrix) {
    //если пользователь начинает выигрывать
    //диагонали
    //диагональ слева
    if (matrix[0][0]===1 && matrix[1][1]===1 && matrix[2][2]===0){
        matrix[2][2]=-1
        return matrix;
    }
    //первая пустая остальные заполнены
    if (matrix[1][1]===1 && matrix[2][2]===1 && matrix[0][0]===0){
        matrix[0][0]=-1
        return matrix;
    }
    //вторая ячейка посередине пустая
    if (matrix[0][0]===1 && matrix[2][2]===1 && matrix[1][1]===0){
        matrix[1][1]=-1
        return matrix;
    }
    //диагональ справа
    //первые две ячейки
    if (matrix[0][2]===1 && matrix[1][1]===1 && matrix[2][0]===0){
        matrix[2][0]=-1
        return matrix;
    }
    //первая пустая остальные заполнены
    if (matrix[1][1]===1 && matrix[2][0]===1 && matrix[0][2]===0){
        matrix[0][2]=-1
        return matrix;
    }
    //вторая ячейка посередине пустая
    if (matrix[0][2]===1 && matrix[2][0]===1 && matrix[1][1]===0){
        matrix[1][1]=-1
        return matrix;
    }
    //1 строка
    //1 и 2 ячейки
    if (matrix[0][0]===1 && matrix[0][1]===1 && matrix[0][2]===0){
        matrix[0][2]=-1;
        return matrix;
    }
    //3 и 2 ячейки
    if (matrix[0][1]===1 && matrix[0][2]===1 && matrix[0][0]===0){
        matrix[0][0]=-1;
        return matrix;
    }
    //1 и 3 ячейки
    if (matrix[0][0]===1 && matrix[0][2]===1 && matrix[0][1]===0){
        matrix[0][1]=-1;
        return matrix;
    }
    //2 строка
    //1 и 2 ячейки
    if (matrix[1][0]===1 && matrix[1][1]===1 && matrix[1][2]===0){
        matrix[1][2]=-1;
        return matrix;
    }
    //3 и 2 ячейки
    if (matrix[1][1]===1 && matrix[1][2]===1 && matrix[1][0]===0){
        matrix[1][0]=-1;
        return matrix;
    }
    //1 и 3 ячейки
    if (matrix[1][0]===1 && matrix[1][2]===1 && matrix[1][1]===0){
        matrix[1][1]=-1;
        return matrix;
    }
    //3 строка
    //1 и 2 ячейки
    if (matrix[2][0]===1 && matrix[2][1]===1 && matrix[2][2]===0){
        matrix[2][2]=-1;
        return matrix;
    }
    //3 и 2 ячейки
    if (matrix[2][1]===1 && matrix[2][2]===1 && matrix[2][0]===0){
        matrix[2][0]=-1;
        return matrix;
    }
    //1 и 3 ячейки
    if (matrix[2][0]===1 && matrix[2][2]===1 && matrix[2][1]===0){
        matrix[2][1]=-1;
        return matrix;
    }
    //1 столбец
    //1 и 2 ячейки
    if (matrix[0][0]===1 && matrix[1][0]===1 && matrix[2][0]===0){
        matrix[2][0]=-1;
        return matrix;
    }
    //3 и 2 ячейки
    if (matrix[1][0]===1 && matrix[2][0]===1 && matrix[0][0]===0){
        matrix[0][0]=-1;
        return matrix;
    }
    //1 и 3 ячейки
    if (matrix[0][0]===1 && matrix[2][0]===1 && matrix[1][0]===0){
        matrix[1][0]=-1;
        return matrix;
    }
    //2 столбец
    //1 и 2 ячейки
    if (matrix[0][1]===1 && matrix[1][1]===1 && matrix[2][1]===0){
        matrix[2][1]=-1;
        return matrix;
    }
    //3 и 2 ячейки
    if (matrix[1][1]===1 && matrix[2][1]===1 && matrix[0][1]===0){
        matrix[0][1]=-1;
        return matrix;
    }
    //1 и 3 ячейки
    if (matrix[0][1]===1 && matrix[2][1]===1 && matrix[1][1]===0){
        matrix[1][1]=-1;
        return matrix;
    }
    //3 столбец
    //1 и 2 ячейки
    if (matrix[0][2]===1 && matrix[1][2]===1 && matrix[2][2]===0){
        matrix[2][2]=-1;
        return matrix;
    }
    //3 и 2 ячейки
    if (matrix[1][2]===1 && matrix[2][2]===1 && matrix[0][2]===0){
        matrix[0][2]=-1;
        return matrix;
    }
    //1 и 3 ячейки
    if (matrix[0][2]===1 && matrix[2][2]===1 && matrix[1][2]===0){
        matrix[1][2]=-1;
        return matrix;
    }
    
    
    
    
    //две ячейки заполнены
    //диагонали
    //диагональ слева
    //первые две ячейки
    if (matrix[0][0]===-1 && matrix[1][1]===-1 && matrix[2][2]===0){
        matrix[2][2]=-1
        return matrix;
    }
    //первая пустая остальные заполнены
    if (matrix[1][1]===-1 && matrix[2][2]===-1 && matrix[0][0]===0){
        matrix[0][0]=-1
        return matrix;
    }
    //вторая ячейка посередине пустая
    if (matrix[0][0]===-1 && matrix[2][2]===-1 && matrix[1][1]===0){
        matrix[1][1]=-1
        return matrix;
    }
    //диагональ справа
    //первые две ячейки
    if (matrix[0][2]===-1 && matrix[1][1]===-1 && matrix[2][0]===0){
        matrix[2][0]=-1
        return matrix;
    }
    //первая пустая остальные заполнены
    if (matrix[1][1]===-1 && matrix[2][0]===-1 && matrix[0][2]===0){
        matrix[0][2]=-1
        return matrix;
    }
    //вторая ячейка посередине пустая
    if (matrix[0][2]===-1 && matrix[2][0]===-1 && matrix[1][1]===0){
        matrix[1][1]=-1
        return matrix;
    }
    //1 строка
    //1 и 2 ячейки
    if (matrix[0][0]===-1 && matrix[0][1]===-1 && matrix[0][2]===0){
        matrix[0][2]=-1;
        return matrix;
    }
    //3 и 2 ячейки
    if (matrix[0][1]===-1 && matrix[0][2]===-1 && matrix[0][0]===0){
        matrix[0][0]=-1;
        return matrix;
    }
    //1 и 3 ячейки
    if (matrix[0][0]===-1 && matrix[0][2]===-1 && matrix[0][1]===0){
        matrix[0][1]=-1;
        return matrix;
    }
    //2 строка
    //1 и 2 ячейки
    if (matrix[1][0]===-1 && matrix[1][1]===-1 && matrix[1][2]===0){
        matrix[1][2]=-1;
        return matrix;
    }
    //3 и 2 ячейки
    if (matrix[1][1]===-1 && matrix[1][2]===-1 && matrix[1][0]===0){
        matrix[1][0]=-1;
        return matrix;
    }
    //1 и 3 ячейки
    if (matrix[1][0]===-1 && matrix[1][2]===-1 && matrix[1][1]===0){
        matrix[1][1]=-1;
        return matrix;
    }
    //3 строка
    //1 и 2 ячейки
    if (matrix[2][0]===-1 && matrix[2][1]===-1 && matrix[2][2]===0){
        matrix[2][2]=-1;
        return matrix;
    }
    //3 и 2 ячейки
    if (matrix[2][1]===-1 && matrix[2][2]===-1 && matrix[2][0]===0){
        matrix[2][0]=-1;
        return matrix;
    }
    //1 и 3 ячейки
    if (matrix[2][0]===-1 && matrix[2][2]===-1 && matrix[2][1]===0){
        matrix[2][1]=-1;
        return matrix;
    }
    //1 столбец
    //1 и 2 ячейки
    if (matrix[0][0]===-1 && matrix[1][0]===-1 && matrix[2][0]===0){
        matrix[2][0]=-1;
        return matrix;
    }
    //3 и 2 ячейки
    if (matrix[1][0]===-1 && matrix[2][0]===-1 && matrix[0][0]===0){
        matrix[0][0]=-1;
        return matrix;
    }
    //1 и 3 ячейки
    if (matrix[0][0]===-1 && matrix[2][0]===-1 && matrix[1][0]===0){
        matrix[1][0]=-1;
        return matrix;
    }
    //2 столбец
    //1 и 2 ячейки
    if (matrix[0][1]===-1 && matrix[1][1]===-1 && matrix[2][1]===0){
        matrix[2][1]=-1;
        return matrix;
    }
    //3 и 2 ячейки
    if (matrix[1][1]===-1 && matrix[2][1]===-1 && matrix[0][1]===0){
        matrix[0][1]=-1;
        return matrix;
    }
    //1 и 3 ячейки
    if (matrix[0][1]===-1 && matrix[2][1]===-1 && matrix[1][1]===0){
        matrix[1][1]=-1;
        return matrix;
    }
    //3 столбец
    //1 и 2 ячейки
    if (matrix[0][2]===-1 && matrix[1][2]===-1 && matrix[2][2]===0){
        matrix[2][2]=-1;
        return matrix;
    }
    //3 и 2 ячейки
    if (matrix[1][2]===-1 && matrix[2][2]===-1 && matrix[0][2]===0){
        matrix[0][2]=-1;
        return matrix;
    }
    //1 и 3 ячейки
    if (matrix[0][2]===-1 && matrix[2][2]===-1 && matrix[1][2]===0){
        matrix[1][2]=-1;
        return matrix;
    }
    //одна ячейка заполнена
      //если первая ячейка нолик, а диагольная снизу не занятя то пишем нолик туда
    if (matrix[0][0]===-1 && matrix[1][1]===0){
        matrix[1][1]=-1
        return matrix;
    }
    //если 5 ячейка нолик, а диагольная снизу не занятя то пишем нолик туда
    if (matrix[1][1]===-1 && matrix[2][2]===0){
        matrix[2][2]=-1
        return  matrix;
    }
    //если 5 ячейка нолик, а диагольная сверху не занятя то пишем нолик туда
    if (matrix[1][1]===-1 && matrix[0][0]===0){
        matrix[0][0]=-1
        return  matrix;
    }
    //если 9 ячейка нолик, а диагольная сверху не занятя то пишем нолик туда
    if (matrix[2][2]===-1 && matrix[1][1]===0){
        matrix[1][1]=-1
        return  matrix;
    }
    
    //если 3 ячейка нолик, а диагольная снизу не занятя то пишем нолик туда
    if (matrix[0][2]===-1 && matrix[1][1]===0){
        matrix[1][1]=-1
        return  matrix;
    }
    //если 5 ячейка нолик, а диагольная снизу не занятя то пишем нолик туда
    if (matrix[1][1]===-1 && matrix[2][0]===0){
        matrix[2][0]=-1
        return  matrix
    }
    //если 5 ячейка нолик, а диагольная сверху не занятя то пишем нолик туда
    if (matrix[1][1]===-1 && matrix[0][2]===0){
        matrix[0][2]=-1
        return  matrix
    }
    //если 7 ячейка нолик, а диагольная сверху не занятя то пишем нолик туда
    if (matrix[2][0]===-1 && matrix[1][1]===0){
        matrix[1][1]=-1
        return  matrix;
    }
    
    //1 ячейка
    //направо
    if (matrix[0][0]===-1 && matrix[0][1]===0){
        matrix[0][1]=-1
        return  matrix;
    }
    //вниз
    if (matrix[0][0]===-1 && matrix[1][0]===0){
        matrix[1][0]=-1
        return matrix;
    }
    //2 ячейка
    //налево
    if (matrix[0][1]===-1 && matrix[0][0]===0){
        matrix[0][0]=-1
        return matrix;
    }
    //направо
    if (matrix[0][1]===-1 && matrix[0][2]===0){
        matrix[0][2]=-1
        return matrix;
    }
    //вниз
    if (matrix[0][1]===-1 && matrix[1][1]===0){
        matrix[1][1]=-1
        return matrix;
    }
    //3 ячейка
    //налево
    if (matrix[0][2]===-1 && matrix[0][1]===0){
        matrix[0][1]=-1
        return matrix;
    }
    //вниз
    if (matrix[0][2]===-1 && matrix[1][2]===0){
        matrix[1][2]=-1
        return matrix;
    }
    //4 ячейка
    //направо
    if (matrix[1][0]===-1 && matrix[1][1]===0){
        matrix[1][1]=-1
        return matrix;
    }
    //вниз
    if (matrix[1][0]===-1 && matrix[2][0]===0){
        matrix[2][0]=-1
        return matrix;
    }
    //наверх
    if (matrix[1][0]===-1 && matrix[0][0]===0){
        matrix[0][0]=-1
        return matrix;
    }
    //5 ячейка
    //налево
    if (matrix[1][1]===-1 && matrix[1][0]===0){
        matrix[1][0]=-1
        return matrix;
    }
    //направо
    if (matrix[1][1]===-1 && matrix[1][2]===0){
        matrix[1][2]=-1
        return matrix;
    }
    //вниз
    if (matrix[1][1]===-1 && matrix[2][1]===0){
        matrix[2][1]=-1
        return matrix;
    }
    //наверх
    if (matrix[1][0]===-1 && matrix[0][1]===0){
        matrix[0][1]=-1
        return matrix;
    }
    //6 ячейка
    //налево
    if (matrix[1][2]===-1 && matrix[1][1]===0){
        matrix[1][1]=-1
        return matrix;
    }
    //вниз
    if (matrix[1][2]===-1 && matrix[2][2]===0){
        matrix[2][2]=-1
        return matrix;
    }
    //наверх
    if (matrix[1][2]===-1 && matrix[0][2]===0){
        matrix[0][2]=-1
        return matrix;
    }
    //7 ячейка
    //направо
    if (matrix[2][0]===-1 && matrix[2][1]===0){
        matrix[2][1]=-1
        return matrix;
    }
    //наверх
    if (matrix[2][0]===-1 && matrix[1][0]===0){
        matrix[1][0]=-1
        return matrix;
    }
    //8 ячейка
    //налево
    if (matrix[2][1]===-1 && matrix[2][0]===0){
        matrix[2][0]=-1
        return matrix;
    }
    //направо
    if (matrix[2][1]===-1 && matrix[2][2]===0){
        matrix[2][2]=-1
        return matrix;
    }
    //наверх
    if (matrix[2][1]===-1 && matrix[1][1]===0){
        matrix[1][1]=-1
        return matrix;
    }
    //9 ячейка
    //налево
    if (matrix[2][2]===-1 && matrix[2][1]===0){
        matrix[2][1]=-1
        return matrix;
    }
    //наверх
    if (matrix[2][2]===-1 && matrix[1][2]===0){
        matrix[1][2]=-1
        return matrix;
    }
}
