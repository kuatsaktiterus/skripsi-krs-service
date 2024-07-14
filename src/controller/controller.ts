export type GetKrsResponse = {
  id: string;
  mahasiswaId: string;
  mataKuliahId: string;
  status: string;
  tahunAjar: string;
  createdAt: Date;
  updatedAt: Date;
  mataKuliah: {
    id: string;
    kode_mk: string
    sks: number;
    createdAt: Date;
    updatedAt: Date;
  };
}

export type GetMkMhs = {
  id: string
  jurusanId: string;
  semesterId: string;
  mataKuliahId: string;
  createdAt: Date;
  updatedAt: Date;
  mataKuliah: {
    id: string;
    kode_mk: string;
    nama_mk: string;
    sks: number;
    createdAt: Date
    updatedAt: Date;
  }
}

export type PostKrsResponse = {
  id: string;
  mahasiswaId: string;
  mataKuliahId: string;
  status: string;
  tahunAjar: string;
  createdAt: Date;
  updatedAt: Date;
}

export type ErrorResponse = {
  code: number;
  status: string;
  errors?: string | object;
}

export type Paging = {
  meta: {
    current_page: string;
    last_page: number;
    per_page: string;
    total: number;
  }
}

const controller = {
  response: (code: number, data?: any) => {
    let status;
    switch (code) {
      case 200:
        status = "OK";
        break;
      case 201:
        status = "CREATED";
        break;
      default:
        break;
    }
    return {
      code: code,
      status: status,
      data: data,
    };
  },

  responseError: (code: Number, errors?: Object) => {
    let status;
    switch (code) {
      case 400:
        status = "BAD REQUEST";
        break;
      case 404:
        status = "NOT FOUND";
        break;
      case 500:
        status = "INTERNAL SERVER ERROR";
        break;
      default:
        break;
    }
    return {
      code: code,
      status: status,
      errors,
    };
  },
};

export default controller;
