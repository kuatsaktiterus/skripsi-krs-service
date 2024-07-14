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
