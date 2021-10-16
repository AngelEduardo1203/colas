import queue
class cola:
    def __init__(self):
        self.items = []

    def estaVacia(self):
        return self.items == []

    def agregar(self, item):
        self.items.insert(0,item)

    def agregarfren(self, item):
           self.items.append(item)
           
    def avanzafin(self):
        return self.items.pop(0)
   
    def avanzar(self):
        return self.items.pop()

    def tamano(self):
        return len(self.items)

    
    def prio(self):
        return print(self.items)

    def prioridad(self):
        prioridad = queue.PriorityQueue(3)
        return prioridad.put()