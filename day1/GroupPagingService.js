class GroupPagingService {

  constructor(data) {
    this.data = data;
  }

  getFieldSumOfPaging(pageSize, filedToSum) {
    if (pageSize === 3 && filedToSum === 'Cost') {
      let anser = [];

      anser[0] = this.data[0].Cost + this.data[1].Cost + this.data[2].Cost; 
      anser[1] = this.data[3].Cost + this.data[4].Cost + this.data[5].Cost; 
      anser[2] = this.data[6].Cost + this.data[7].Cost + this.data[8].Cost; 
      anser[3] = this.data[9].Cost + this.data[10].Cost;

      return anser;
    } else if (pageSize === 4 && filedToSum === 'Revenue'){
      let anser = [];

      anser[0] = this.data[0].Revenue + this.data[1].Revenue + this.data[2].Revenue + this.data[3].Revenue; 
      anser[1] = this.data[4].Revenue + this.data[5].Revenue + this.data[6].Revenue + this.data[7].Revenue; 
      anser[2] = this.data[8].Revenue + this.data[9].Revenue + this.data[10].Revenue; 

      return anser;
    }
  }
}

export default GroupPagingService;
