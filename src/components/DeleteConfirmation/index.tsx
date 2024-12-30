import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { Button, DialogActions, DialogContent } from '@mui/material';

interface DeleteConfirmationProps {
  open: boolean
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteConfirmation: React.FC<DeleteConfirmationProps> = ({open, onClose, onConfirm}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle> Confirmação de Exclusão</DialogTitle>
      <DialogContent>
        <p> Confirma a exclusão do item? Essa ação não poderá ser desfeita. </p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={onConfirm} color="secondary">
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DeleteConfirmation