import {useNavigate} from "react-router-dom";
import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const pages = ['Home', 'Civilizations', 'Units', 'Structures', 'Technologies'];

function NavBar() {
    let navigate = useNavigate();

    function goTo(page: string) {
        if (page === 'home') {
            navigate(`/`, { replace: true })
        } else {
            navigate(`/${page}`, { replace: true })
        }
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page: string) => (
                            <Button
                                key={page}
                                onClick={() => goTo(page.toLocaleLowerCase())}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default NavBar
