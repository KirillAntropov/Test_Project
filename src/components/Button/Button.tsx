import Button from '@mui/material/Button';

import './Button.css';

export interface ButtonProps {
    onClick?: () => void
    loading?: boolean
}

export const ButtonClick = ({ onClick, loading }: ButtonProps) => {
    const buttonSX = {
        background: '#FBC02D',
        '&:hover': {
            background: '#eab027',
        },
        color: 'black',
        padding: '5px 70px',
        width: '100%',
        marginBottom: '15px',
    };
    return (
      <Button variant="contained"
        className="button"
        sx={buttonSX}
        onClick={onClick}
        disabled={loading}>
            {loading ? 'Загрузка...' : 'Кликнуть'}
        </Button>
    );
};
