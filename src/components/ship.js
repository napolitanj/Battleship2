const Ship = (length, name) => {
    return {
        length,
        name,
        health: length,
        heading:'horizontal',
        location:[],
        changeHeading() {
            if (this.heading === 'horizontal') {
                this.heading = 'vertical'
            } else {
                this.heading = 'horizontal'
            }
        },
        hit() {
            return this.health += -1;
        },
        isSunk() {
            if (this.health === 0) {
                console.log(this.name + " sunk!")
                return true;
            } else {
                return false;
            }
        }
    }
}


export default Ship;