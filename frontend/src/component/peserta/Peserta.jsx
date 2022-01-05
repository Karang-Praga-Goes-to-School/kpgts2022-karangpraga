import NavbarLoggedIn from "../komponen_umum/NavbarLoggedIn";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import * as React from 'react';

// Buat tema
const theme = createTheme({
    typography: {
        fontFamily: 'Ramaraja',
        fontSize: 16
    },
    palette: {
        background: {
            default: "#F2EBCE"
        },
        primary: {
            main: "#A7B560"
        }
    },
});

// Tombol
const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText('#554B3F'),
    fontFamily: 'Ramaraja',
    fontSize: "18px",
    padding: "auto",
    backgroundColor: '#554B3F',
    margin: "auto",
    borderRadius: "15px",
    justifyContent: "center",
    textAlign: "center",
    padding: "auto",
    '&:hover': {
      backgroundColor: '#726454',
    },
  }));

// Buat pilihan berapa orang regist
const jumlah = [
    {
      value: '1',
      label: '1'
    },
    {
      value: '2',
      label: '2',
    },
    {
      value: '3',
      label: '3',
    },
    {
      value: '4',
      label: '4',
    },
    {
      value: '5',
      label: '5',
    },
  ];

  const jurusans = [
    {
      value: 'IPA',
      label: 'IPA'
    },
    {
      value: 'IPS',
      label: 'IPS',
    },
  ];

  const pembayarans = [
    {
      value: 'BCA',
      label: 'BCA'
    },
    {
      value: 'GOPAY',
      label: 'GOPAY',
    },
  ];


//   Buat rendering peserta
const Peserta = () => {
    // state form
    const [jumlahVal, setJumlahVal] = useState('1');
    const [pembayaran, setPembayaran] = useState('');
    const [valueDate, setValueDate] = React.useState([]);
    const [startDate, setStartDate] = useState(new Date("2022/01/22"));
    const [endDate, setEndDate] = useState(new Date("2022/01/25"));
    const [jurusan, setJurusan] = useState([]);
    const [nama, setNama] = useState([]);
    const [asalSMA, setAsalSMA] = useState({});
    const [kontak, setKontak] = useState({});

    // Pake yg ini ya
    let arr= []
    for (var i = 0; i < jumlahVal; i++){
        arr.push({nama: null, sma: null, kontak: null, jurusan: null, tanggal: null})
    }
    const [data, setData] = useState(arr)
    // {
    //     nama:
    //     sma:
    //     kontak:
    //     jurusan:
    //     tanggal:
    // }


    // Kurang semua state nama dll
    const handleJurusan = (event) => {
        setJurusan([...jurusan, event.target.value]);
    };
    const handleChange = (event) => {
        setJumlahVal(event.target.value);
        let lengthAwal = arr.length;
        let tempArr = arr;
        for (var i = lengthAwal - 1; i < jumlahVal; i++){
            tempArr.push({nama: null, sma: null, kontak: null, jurusan: null, tanggal: null})
        };
        arr = tempArr;
        setData(tempArr);
    };
    const handlePembayaran = (event) => {
        setPembayaran(event.target.value);
    };
    const handleNama = (event) => {
        const idx = event.target.getAttribute('name')
        let temp = data
        console.log(temp)
        temp[idx]["nama"] = event.target.value
        console.log(temp)
        setData(temp)
    };
    const handleAsal = (event) => {
        const asalVal = event.target.value;
        setAsalSMA(changes => ({...changes, asalVal}));
    };
    const handleKontak = (event) => {
        const kontakVal = event.target.value;
        setKontak(changes => ({...changes, kontakVal}));
    };

    //handler submit
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(arr);
    }

    const renderForm = () => {
        var rows = [];
        for (var i = 0; i < jumlahVal; i++) {
            rows.push(
                <>
                    <Typography component="h1" variant="h6" marginTop={5}>
                        Data Diri Peserta {i+1}
                    </Typography>
                    {/* Isi data diri */}
                    <Grid item xs={12}>
                        <TextField
                        required
                        fullWidth
                        id={nama}
                        label="Nama Lengkap"
                        name={i}
                        autoComplete="nama"
                        value={data[i]["nama"]}
                        onChange={handleNama}
                        />
                    </Grid>
                    {/*<Grid item xs={12}>*/}
                    {/*    <TextField*/}
                    {/*    required*/}
                    {/*    fullWidth*/}
                    {/*    id="asalSMA"*/}
                    {/*    label="Asal SMA"*/}
                    {/*    name="asalSMA"*/}
                    {/*    autoComplete="SMA N 0 Semarang"*/}
                    {/*    value={asalSMA[i]}*/}
                    {/*    onChange={handleAsal}*/}
                    {/*    />*/}
                    {/*</Grid>*/}
                    {/*<Grid item xs={12}>*/}
                    {/*    <TextField*/}
                    {/*    required*/}
                    {/*    fullWidth*/}
                    {/*    id="kontak"*/}
                    {/*    label="Nomor HP"*/}
                    {/*    name="kontak"*/}
                    {/*    type="number"*/}
                    {/*    autoComplete="08123456789"*/}
                    {/*    helperText="Masukkan angka"*/}
                    {/*    value={kontak[i]}*/}
                    {/*    onChange={handleKontak}*/}
                    {/*    />*/}
                    {/*</Grid>*/}
                    {/*<Grid item xs={12}>*/}
                    {/*    <TextField*/}
                    {/*    select*/}
                    {/*    required*/}
                    {/*    fullWidth*/}
                    {/*    id="jurusan"*/}
                    {/*    label="Jurusan Try Out"*/}
                    {/*    name="jurusan"*/}
                    {/*    value={jurusan[i]}*/}
                    {/*    onChange={handleJurusan}*/}
                    {/*    >*/}
                    {/*        {jurusans.map((option) => (*/}
                    {/*            <MenuItem key={option.value} value={option.value}>*/}
                    {/*                {option.label}*/}
                    {/*            </MenuItem>*/}
                    {/*        ))}*/}
                    {/*    </TextField>*/}
                    {/*</Grid>*/}
                    {/*<Grid item xs={12}>*/}
                    {/*    <LocalizationProvider dateAdapter={AdapterDateFns}>*/}
                    {/*        <DatePicker*/}
                    {/*        label="Pilih Tanggal Try Out"*/}
                    {/*        openTo="day"*/}
                    {/*        views={['year', 'month', 'day']}*/}
                    {/*        value={new Date(valueDate[i])}*/}
                    {/*        minDate={startDate}*/}
                    {/*        maxDate={endDate}*/}
                    {/*        onChange={(newValue) => {*/}
                    {/*            setValueDate([...valueDate, newValue]);*/}
                    {/*        }}*/}
                    {/*        renderInput={(params) => <TextField {...params} />}*/}
                    {/*        />*/}
                    {/*    </LocalizationProvider>*/}
                    {/*</Grid>*/}
                </>);
                        }
        return rows.map((row) => row);
    }

    return(
        <ThemeProvider theme={theme}>
            <NavbarLoggedIn></NavbarLoggedIn>
            <CssBaseline />
            <Container component="main" maxWidth="xl" >
                <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: "column",
                }}>
                    <Typography component="h1" variant="h4">
                        Registrasi Tryout
                    </Typography>
                    {/* Pilih jumlah orang */}
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, width: "70vw" }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} marginBottom={2}>
                                <TextField
                                    fullWidth
                                    id="outlined-select-jumlah"
                                    select
                                    label="Jumlah Peserta"
                                    value={jumlahVal}
                                    onChange={handleChange}
                                    helperText="Pilih jumlah peserta yang akan registrasi Try Out"                        
                                >
                                    {jumlah.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            {/* Bagian form */}
                            {renderForm()}
                            <Typography component="h1" variant="h5" marginTop={5}>
                                Pembayaran
                            </Typography>
                            <Grid item xs={12}>
                                <TextField
                                select
                                required
                                fullWidth
                                id="pembayaran"
                                label="Cara Pembayaran"
                                name="pembayaran"
                                value={pembayaran}
                                onChange={handlePembayaran}
                                >
                                    {pembayarans.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <ColorButton type="submit" size="medium" variant="contained" style={{ width:"8vw" }}>
                                    Submit
                                </ColorButton>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default Peserta;