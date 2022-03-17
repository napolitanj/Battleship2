const Ship = (length, name) => {
    return {
        length,
        name,
        hull: buildHull(length,),
        heading:'horizontal',
        getHeading() {
            this.heading
        },
        changeHeading() {
            if (this.heading === 'horizontal') {
                this.heading = 'vertical'
            } else {
                this.heading = 'horizontal'
            }
        },
        hit(position) {
            this.hull[position] = 0;
            return this.hull;
        },
        isSunk() {
            if (this.hull.reduce((total, currentPositionValue) => total + currentPositionValue) === 0) {
                return true;
            } else {
                return false;
            }
        }
    }
}

function buildHull(length) {
    let hull = []
    for (let i = 0; i < length; i++) {
        hull.push(1);
    }
    return hull;
}

export default Ship;