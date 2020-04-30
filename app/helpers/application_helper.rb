module ApplicationHelper
  def get_flash_type type
    case type
    when "danger"
      "Crap!"
    when "warning"
      "Nah..."
    else
      "Nice..."
    end
  end
end
